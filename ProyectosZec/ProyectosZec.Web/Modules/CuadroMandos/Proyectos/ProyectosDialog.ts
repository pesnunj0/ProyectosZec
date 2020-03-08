
namespace ProyectosZec.CuadroMandos {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ProyectosDialog extends Serenity.EntityDialog<ProyectosRow, any> {
        protected getFormKey() { return ProyectosForm.formKey; }
        protected getIdProperty() { return ProyectosRow.idProperty; }
        protected getLocalTextPrefix() { return ProyectosRow.localTextPrefix; }
        protected getNameProperty() { return ProyectosRow.nameProperty; }
        protected getService() { return ProyectosService.baseUrl; }
        protected getDeletePermission() { return ProyectosRow.deletePermission; }
        protected getInsertPermission() { return ProyectosRow.insertPermission; }
        protected getUpdatePermission() { return ProyectosRow.updatePermission; }

        protected form = new ProyectosForm(this.idPrefix);

    }
}