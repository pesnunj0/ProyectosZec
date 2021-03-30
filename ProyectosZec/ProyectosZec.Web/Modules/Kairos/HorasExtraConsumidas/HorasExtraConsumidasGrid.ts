
namespace ProyectosZec.Kairos {

    @Serenity.Decorators.registerClass()
    export class HorasExtraConsumidasGrid extends Serenity.EntityGrid<HorasExtraConsumidasRow, any> {
        protected getColumnsKey() { return 'Kairos.HorasExtraConsumidas'; }
        protected getDialogType() { return HorasExtraConsumidasDialog; }
        protected getIdProperty() { return HorasExtraConsumidasRow.idProperty; }
        protected getInsertPermission() { return HorasExtraConsumidasRow.insertPermission; }
        protected getLocalTextPrefix() { return HorasExtraConsumidasRow.localTextPrefix; }
        protected getService() { return HorasExtraConsumidasService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        // Botones Excel y Pdf
        getButtons() {
            var buttons = super.getButtons();

            buttons.push(ProyectosZec.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: 'Kairos/HorasExtraConsumidas/ListExcel',
                separator: true
            }));

            buttons.push(ProyectosZec.Common.PdfExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit()
            }));

            // Quitamos boton de añadir para evitar que se añadan nuevas extras
//            buttons.splice(Q.indexOf(buttons, x => x.cssClass == "add-button"), 1);

            return buttons;
            // Fin añadidos
        }
    }
}