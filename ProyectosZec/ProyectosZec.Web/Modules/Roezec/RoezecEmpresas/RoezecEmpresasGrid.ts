
namespace ProyectosZec.Roezec {

    @Serenity.Decorators.registerClass()
    // Añadido para los filtros multiples
    @Serenity.Decorators.filterable()
    // Fin Añadido
    export class RoezecEmpresasGrid extends Serenity.EntityGrid<RoezecEmpresasRow, any> {
        protected getColumnsKey() { return 'Roezec.RoezecEmpresas'; }
        protected getDialogType() { return RoezecEmpresasDialog; }
        protected getIdProperty() { return RoezecEmpresasRow.idProperty; }
        protected getInsertPermission() { return RoezecEmpresasRow.insertPermission; }
        protected getLocalTextPrefix() { return RoezecEmpresasRow.localTextPrefix; }
        protected getService() { return RoezecEmpresasService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        // Botones Excel y Pdf
        getButtons() {
            var buttons = super.getButtons();

            buttons.push(ProyectosZec.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: 'Roezec/RoezecEmpresas/ListExcel',
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