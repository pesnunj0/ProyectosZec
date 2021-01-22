
namespace ProyectosZec.Kairos {

    @Serenity.Decorators.registerClass()
    export class KrsEmpleadosDialog extends Serenity.EntityDialog<KrsEmpleadosRow, any> {
        protected getFormKey() { return KrsEmpleadosForm.formKey; }
        protected getIdProperty() { return KrsEmpleadosRow.idProperty; }
        protected getLocalTextPrefix() { return KrsEmpleadosRow.localTextPrefix; }
        protected getNameProperty() { return KrsEmpleadosRow.nameProperty; }
        protected getService() { return KrsEmpleadosService.baseUrl; }
        protected getDeletePermission() { return KrsEmpleadosRow.deletePermission; }
        protected getInsertPermission() { return KrsEmpleadosRow.insertPermission; }
        protected getUpdatePermission() { return KrsEmpleadosRow.updatePermission; }

        protected form = new KrsEmpleadosForm(this.idPrefix);

    }
}