
namespace ProyectosZec.Roezec {

    @Serenity.Decorators.registerClass()
    // Añadido para los filtros multiples
    @Serenity.Decorators.filterable()
    // Fin Añadido
    export class NacesGrid extends Serenity.EntityGrid<NacesRow, any> {
        protected getColumnsKey() { return 'Roezec.Naces'; }
        protected getDialogType() { return NacesDialog; }
        protected getIdProperty() { return NacesRow.idProperty; }
        protected getInsertPermission() { return NacesRow.insertPermission; }
        protected getLocalTextPrefix() { return NacesRow.localTextPrefix; }
        protected getService() { return NacesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        // Botones Excel y Pdf
        getButtons() {
            var buttons = super.getButtons();

            buttons.push(ProyectosZec.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: 'Roezec/Naces/ListExcel',
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
