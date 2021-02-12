
namespace ProyectosZec.Kairos {

    @Serenity.Decorators.registerClass()
    // Añadido para los filtros multiples
    @Serenity.Decorators.filterable()
    // Fin Añadido
    export class DiarioGrid extends Serenity.EntityGrid<DiarioRow, any> {
        protected getColumnsKey() { return 'Kairos.Diario'; }
        protected getDialogType() { return DiarioDialog; }
        protected getIdProperty() { return DiarioRow.idProperty; }
        protected getInsertPermission() { return DiarioRow.insertPermission; }
        protected getLocalTextPrefix() { return DiarioRow.localTextPrefix; }
        protected getService() { return DiarioService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected createSlickGrid() {
            var grid = super.createSlickGrid();

            // Declaramos que el Grid puedes seleccionar fila
            grid.setSelectionModel(new Slick.RowSelectionModel());

            return grid;
        }

        /**
* This method is called for all rows
* @param item Data item for current row
* @param index Index of the row in grid
*/
        protected getItemCssClass(item: Kairos.DiarioRow, index: number): string {
            let klass: string = "";

            if (item.Salida == null)
                klass += " out-of-stock";
            else if (item.Entrada == null)
                klass += " critical-stock";

            return Q.trimToNull(klass);
        }

        // Botones Excel y Pdf
        getButtons() {
            var buttons = super.getButtons();

            buttons.push(ProyectosZec.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: 'Kairos/Diario/ListExcel',
                separator: true
            }));

            buttons.push(ProyectosZec.Common.PdfExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit()
            }));

            return buttons;
            // Fin añadidos
        }
    }
}