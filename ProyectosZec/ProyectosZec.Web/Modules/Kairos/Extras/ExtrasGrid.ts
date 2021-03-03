
namespace ProyectosZec.Kairos {
    import fld = ExtrasRow.Fields;
    @Serenity.Decorators.registerClass()
    // Añadido para los filtros multiples
    @Serenity.Decorators.filterable()
    // Fin Añadido
    export class ExtrasGrid extends Serenity.EntityGrid<ExtrasRow, any> {
        protected getColumnsKey() { return 'Kairos.Extras'; }
        protected getDialogType() { return ExtrasDialog; }
        protected getIdProperty() { return ExtrasRow.idProperty; }
        protected getInsertPermission() { return ExtrasRow.insertPermission; }
        protected getLocalTextPrefix() { return ExtrasRow.localTextPrefix; }
        protected getService() { return ExtrasService.baseUrl; }

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
                    new Slick.Aggregators.Sum(ExtrasRow.Fields.TotalHorasExtrasReales),
                    new Slick.Aggregators.Sum(ExtrasRow.Fields.TotalHorasExtrasConvertidas)
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
                service: 'Kairos/Extras/ListExcel',
                separator: true
            }));

            buttons.push(ProyectosZec.Common.PdfExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit()
            }));

            return buttons;
            // Fin añadidos
        }

        /**
 * This method is called for all rows
 * @param item Data item for current row
 * @param index Index of the row in grid
 */
        protected getItemCssClass(item: Kairos.ExtrasRow, index: number): string {
            let klass: string = "";

            if (item.Estado == "A")
                klass += " aceptada";
            else if (item.Estado == "C")
                klass += " rechazada";

            return Q.trimToNull(klass);
        }
    
    }
}