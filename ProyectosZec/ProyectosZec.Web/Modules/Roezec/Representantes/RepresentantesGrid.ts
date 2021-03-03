
namespace ProyectosZec.Roezec {

    @Serenity.Decorators.registerClass()
    // Añadido para los filtros multiples
    @Serenity.Decorators.filterable()
    // Fin Añadido
    export class RepresentantesGrid extends Serenity.EntityGrid<RepresentantesRow, any> {
        protected getColumnsKey() { return 'Roezec.Representantes'; }
        protected getDialogType() { return RepresentantesDialog; }
        protected getIdProperty() { return RepresentantesRow.idProperty; }
        protected getInsertPermission() { return RepresentantesRow.insertPermission; }
        protected getLocalTextPrefix() { return RepresentantesRow.localTextPrefix; }
        protected getService() { return RepresentantesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        // Botones Excel y Pdf
        getButtons() {
            var buttons = super.getButtons();

            buttons.push(ProyectosZec.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: 'Roezec/Representantes/ListExcel',
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