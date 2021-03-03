
namespace ProyectosZec.Roezec {

    @Serenity.Decorators.registerClass()
    // Añadido para los filtros multiples
    @Serenity.Decorators.filterable()
    // Fin Añadido
    export class SociosGrid extends Serenity.EntityGrid<SociosRow, any> {
        protected getColumnsKey() { return 'Roezec.Socios'; }
        protected getDialogType() { return SociosDialog; }
        protected getIdProperty() { return SociosRow.idProperty; }
        protected getInsertPermission() { return SociosRow.insertPermission; }
        protected getLocalTextPrefix() { return SociosRow.localTextPrefix; }
        protected getService() { return SociosService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        // Botones Excel y Pdf
        getButtons() {
            var buttons = super.getButtons();

            buttons.push(ProyectosZec.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: 'Roezec/Socios/ListExcel',
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