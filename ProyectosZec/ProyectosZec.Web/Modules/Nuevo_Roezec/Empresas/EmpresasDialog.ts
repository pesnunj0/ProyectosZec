
namespace ProyectosZec.Nuevo_Roezec {

    @Serenity.Decorators.registerClass()
    export class EmpresasDialog extends Serenity.EntityDialog<EmpresasRow, any> {
        protected getFormKey() { return EmpresasForm.formKey; }
        protected getIdProperty() { return EmpresasRow.idProperty; }
        protected getLocalTextPrefix() { return EmpresasRow.localTextPrefix; }
        protected getNameProperty() { return EmpresasRow.nameProperty; }
        protected getService() { return EmpresasService.baseUrl; }
        protected getDeletePermission() { return EmpresasRow.deletePermission; }
        protected getInsertPermission() { return EmpresasRow.insertPermission; }
        protected getUpdatePermission() { return EmpresasRow.updatePermission; }

        protected form = new EmpresasForm(this.idPrefix);

    }
}