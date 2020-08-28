
namespace ProyectosZec.Inmovilizado {

    @Serenity.Decorators.registerClass()
    export class ProveedoresGrid extends Serenity.EntityGrid<ProveedoresRow, any> {
        protected getColumnsKey() { return 'Inmovilizado.Proveedores'; }
        protected getDialogType() { return ProveedoresDialog; }
        protected getIdProperty() { return ProveedoresRow.idProperty; }
        protected getInsertPermission() { return ProveedoresRow.insertPermission; }
        protected getLocalTextPrefix() { return ProveedoresRow.localTextPrefix; }
        protected getService() { return ProveedoresService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        getButtons() {
            var buttons = super.getButtons();

            // Botones Excel y Pdf
            buttons.push(ProyectosZec.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: 'Inmovilizado/Proveedores/ListExcel',
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