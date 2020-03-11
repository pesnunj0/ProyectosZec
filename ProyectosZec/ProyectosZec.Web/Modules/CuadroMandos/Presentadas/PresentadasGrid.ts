
namespace ProyectosZec.CuadroMandos {

    @Serenity.Decorators.registerClass()
    // Añadido para los filtros multiples
    @Serenity.Decorators.filterable()
    // Fin Añadido
    export class PresentadasGrid extends Serenity.EntityGrid<ProyectosRow, any> {
        protected getColumnsKey() { return 'CuadroMandos.Presentadas'; }
        protected getDialogType() { return PresentadasDialog; }
        protected getIdProperty() { return ProyectosRow.idProperty; }
        protected getInsertPermission() { return ProyectosRow.insertPermission; }
        protected getLocalTextPrefix() { return ProyectosRow.localTextPrefix; }
        protected getService() { return PresentadasService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        // Añadidos
        // Primero campo de ordenación por defecto en este caso, fecha de presentación
        protected getDefaultSortBy() {
            return [ProyectosRow.Fields.FechaPresentacion];
        }
        // Agrupar y sumar 
        protected createSlickGrid() {
            var grid = super.createSlickGrid();

            // need to register this plugin for grouping or you'll have errors
            grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());

            this.view.setSummaryOptions({
                aggregators: [
                    new Slick.Aggregators.Sum(ProyectosRow.Fields.Empleos),
                    new Slick.Aggregators.Sum(ProyectosRow.Fields.EmpleoReal),
                    new Slick.Aggregators.Sum(ProyectosRow.Fields.Inversion),
                    new Slick.Aggregators.Sum(ProyectosRow.Fields.InversionReal)
                ]
            });
            return grid;
        }

        // Añadimos la fila de pie para los totales
        protected getSlickOptions() {
            var opt = super.getSlickOptions();
            opt.showFooterRow = true;
            return opt;
        }

        protected usePager() {
            return false;
        }

        // Ahora los botones. Quitamos el botón de añadir y ponemos los de Excel, Pdf y Agrupar por técnico
        protected getButtons(): Serenity.ToolButton[] {

            // call base method to get list of buttons
            // by default, base entity grid adds a few buttons, 
            // add, refresh, column selection in order.
            var buttons = super.getButtons();
            // METHOD 3 - recommended
            // remove by splicing, but this time find button index
            // by its css class. it is the best and safer method
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);
            // Ahora añadimos el resto de botones
            buttons.push(ProyectosZec.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: 'CuadroMandos/Proyectos/ListExcel',
                separator: true
            }));

            buttons.push(ProyectosZec.Common.PdfExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit()
            }));
            buttons.push(
                {
                    title: 'Técnico',
                    cssClass: 'expand-all-button',
                    onClick: () => this.view.setGrouping(
                        [{
                            formatter: x => 'Técnico: ' + x.value + ' (' + x.count + ' Proyectos)',
                            getter: ProyectosRow.Fields.Tecnico
                        }])
                }
            );
            buttons.push(
                {
                    title: 'Desagrupar',
                    cssClass: 'collapse-all-button',
                    onClick: () => this.view.setGrouping([])
                }
            );


            return buttons;
        }

        protected onViewSubmit() {
            // only continue if base class returns true (didn't cancel request)
            if (!super.onViewSubmit()) {
                return false;
            }

            // view object is the data source for grid (SlickRemoteView)
            // this is an EntityGrid so its Params object is a ListRequest
            var request = this.view.params as Serenity.ListRequest;

            // list request has a Criteria parameter
            // we AND criteria here to existing one because 
            // otherwise we might clear filter set by 
            // an edit filter dialog if any.

            request.Criteria = Serenity.Criteria.and(request.Criteria,
                [['FechaPresentacion'], '>', '1900-01-01']);
               

            // TypeScript doesn't support operator overloading
            // so we had to use array syntax above to build criteria.

            // Make sure you write
            // [['Field'], '>', 10] (which means field A is greater than 10)
            // not 
            // ['A', '>', 10] (which means string 'A' is greater than 10

            return true;
        }
    }
}