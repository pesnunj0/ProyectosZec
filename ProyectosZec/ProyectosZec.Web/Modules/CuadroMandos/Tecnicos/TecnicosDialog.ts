
namespace ProyectosZec.CuadroMandos {

    @Serenity.Decorators.registerClass()
    export class TecnicosDialog extends Serenity.EntityDialog<TecnicosRow, any> {
        protected getFormKey() { return TecnicosForm.formKey; }
        protected getIdProperty() { return TecnicosRow.idProperty; }
        protected getLocalTextPrefix() { return TecnicosRow.localTextPrefix; }
        protected getNameProperty() { return TecnicosRow.nameProperty; }
        protected getService() { return TecnicosService.baseUrl; }
        protected getDeletePermission() { return TecnicosRow.deletePermission; }
        protected getInsertPermission() { return TecnicosRow.insertPermission; }
        protected getUpdatePermission() { return TecnicosRow.updatePermission; }

        protected form = new TecnicosForm(this.idPrefix);

    }
}