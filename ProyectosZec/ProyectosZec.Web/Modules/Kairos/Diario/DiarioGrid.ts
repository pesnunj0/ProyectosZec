
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