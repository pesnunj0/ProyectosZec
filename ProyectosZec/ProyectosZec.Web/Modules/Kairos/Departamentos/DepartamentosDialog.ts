
namespace ProyectosZec.Kairos {

    @Serenity.Decorators.registerClass()
    export class DepartamentosDialog extends Serenity.EntityDialog<DepartamentosRow, any> {
        protected getFormKey() { return DepartamentosForm.formKey; }
        protected getIdProperty() { return DepartamentosRow.idProperty; }
        protected getLocalTextPrefix() { return DepartamentosRow.localTextPrefix; }
        protected getNameProperty() { return DepartamentosRow.nameProperty; }
        protected getService() { return DepartamentosService.baseUrl; }
        protected getDeletePermission() { return DepartamentosRow.deletePermission; }
        protected getInsertPermission() { return DepartamentosRow.insertPermission; }
        protected getUpdatePermission() { return DepartamentosRow.updatePermission; }

        protected form = new DepartamentosForm(this.idPrefix);

    }
}