
namespace ProyectosZec.Intranet {

    @Serenity.Decorators.registerClass()
    // Añadido para los filtros multiples
    @Serenity.Decorators.filterable()
    // Fin Añadido

    export class TelefonosGrid extends Serenity.EntityGrid<TelefonosRow, any> {
        protected getColumnsKey() { return 'Intranet.Telefonos'; }
        protected getDialogType() { return TelefonosDialog; }
        protected getIdProperty() { return TelefonosRow.idProperty; }
        protected getInsertPermission() { return TelefonosRow.insertPermission; }
        protected getLocalTextPrefix() { return TelefonosRow.localTextPrefix; }
        protected getService() { return TelefonosService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    
        // Añadidos
        // Primero campo de ordenación por defecto
        // No olvidarse Cambiar el Row y el Id
        protected getDefaultSortBy() {
        return [TelefonosRow.Fields.TelefonoId];
    }

    // Botones Excel y Pdf
    getButtons() {
        var buttons = super.getButtons();

        buttons.push(ProyectosZec.Common.ExcelExportHelper.createToolButton({
            grid: this,
            onViewSubmit: () => this.onViewSubmit(),
            service: 'Intranet/Telefonos/ListExcel',
            separator: true
        }));

        buttons.push(ProyectosZec.Common.PdfExportHelper.createToolButton({
            grid: this,
            onViewSubmit: () => this.onViewSubmit()
        }));

        return buttons;
        // Fin añadidos

}