
namespace ProyectosZec.Kairos {

    @Serenity.Decorators.registerClass()
    // Añadido para los filtros multiples
    @Serenity.Decorators.filterable()
    // Fin Añadido
    export class AusenciasProgramadasGrid extends Serenity.EntityGrid<AusenciasProgramadasRow, any> {
        protected getColumnsKey() { return 'Kairos.AusenciasProgramadas'; }
        protected getDialogType() { return AusenciasProgramadasDialog; }
        protected getIdProperty() { return AusenciasProgramadasRow.idProperty; }
        protected getInsertPermission() { return AusenciasProgramadasRow.insertPermission; }
        protected getLocalTextPrefix() { return AusenciasProgramadasRow.localTextPrefix; }
        protected getService() { return AusenciasProgramadasService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        // Agrupar y sumar 
        protected createSlickGrid() {
            var grid = super.createSlickGrid();

            // need to register this plugin for grouping or you'll have errors
            grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());

            this.view.setSummaryOptions({
                aggregators: [
                    new Slick.Aggregators.Sum(AusenciasProgramadasRow.Fields.TotalDias),
                    new Slick.Aggregators.Sum(AusenciasProgramadasRow.Fields.TotalHoras)
                ]
            });

            // Declaramos que el Grid puedes seleccionar fila
            grid.setSelectionModel(new Slick.RowSelectionModel());

            return grid;
        }
        protected getSlickOptions() {
            var opt = super.getSlickOptions();
            // Mostrar pie de página
            opt.showFooterRow = true;
            // Fin pie de página
            // Fila Seleccionable
            opt.enableTextSelectionOnCells = true;
            opt.selectedCellCssClass = "slick-row-selected";
            opt.enableCellNavigation = true;
            // Fin Fila Seleccionable
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
                service: 'Kairos/AusenciasProgramadas/ListExcel',
                separator: true
            }));

            buttons.push(ProyectosZec.Common.PdfExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit()
            }));

            // Quitamos boton de añadir para evitar que se añadan nuevas extras
            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);

            return buttons;
            // Fin añadidos
        }

    }
}