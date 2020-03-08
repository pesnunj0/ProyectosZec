
namespace ProyectosZec.CuadroMandos {

    @Serenity.Decorators.registerClass()
    // Añadido para los filtros multiples
    @Serenity.Decorators.filterable()
    // Fin Añadido

    export class ProyectosGrid extends Serenity.EntityGrid<ProyectosRow, any> {
        protected getColumnsKey() { return 'CuadroMandos.Proyectos'; }
        protected getDialogType() { return ProyectosDialog; }
        protected getIdProperty() { return ProyectosRow.idProperty; }
        protected getInsertPermission() { return ProyectosRow.insertPermission; }
        protected getLocalTextPrefix() { return ProyectosRow.localTextPrefix; }
        protected getService() { return ProyectosService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        // Añadidos
        // Primero campo de ordenación por defecto
        protected getDefaultSortBy() {
            return [ProyectosRow.Fields.ProyectoId];
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

        protected getSlickOptions() {
            var opt = super.getSlickOptions();
            opt.showFooterRow = true;
            return opt;
        }

        protected usePager() {
            return false;
        }


        // Botones Excel y Pdf
        getButtons() {
            var buttons = super.getButtons();

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
            // Fin añadidos
        }
    }
}