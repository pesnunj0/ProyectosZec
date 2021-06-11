
namespace ProyectosZec.Kairos {

    @Serenity.Decorators.registerClass()
    export class AusenciasProgramadasDialog extends Serenity.EntityDialog<AusenciasProgramadasRow, any> {
        protected getFormKey() { return AusenciasProgramadasForm.formKey; }
        protected getIdProperty() { return AusenciasProgramadasRow.idProperty; }
        protected getLocalTextPrefix() { return AusenciasProgramadasRow.localTextPrefix; }
        protected getService() { return AusenciasProgramadasService.baseUrl; }
        protected getDeletePermission() { return AusenciasProgramadasRow.deletePermission; }
        protected getInsertPermission() { return AusenciasProgramadasRow.insertPermission; }
        protected getUpdatePermission() { return AusenciasProgramadasRow.updatePermission; }

        protected form = new AusenciasProgramadasForm(this.idPrefix);

    }
}