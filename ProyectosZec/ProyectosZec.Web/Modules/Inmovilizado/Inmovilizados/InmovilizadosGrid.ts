
namespace ProyectosZec.Inmovilizado {
    @Serenity.Decorators.registerClass()
    // Añadido para los filtros multiples
    @Serenity.Decorators.filterable()
    // Fin Añadido
    @Serenity.Decorators.registerClass()
    export class InmovilizadosGrid extends Serenity.EntityGrid<InmovilizadosRow, any> {
        protected getColumnsKey() { return 'Inmovilizado.Inmovilizados'; }
        protected getDialogType() { return InmovilizadosDialog; }
        protected getIdProperty() { return InmovilizadosRow.idProperty; }
        protected getInsertPermission() { return InmovilizadosRow.insertPermission; }
        protected getLocalTextPrefix() { return InmovilizadosRow.localTextPrefix; }
        protected getService() { return InmovilizadosService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        getButtons() {
            var buttons = super.getButtons();

            buttons.push(ProyectosZec.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: 'Inmovilizado/Inmovilizados/ListExcel',
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