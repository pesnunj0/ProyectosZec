
namespace ProyectosZec.Nuevo_Roezec {

    @Serenity.Decorators.registerClass()
    export class EmpresasContactosDialog extends Serenity.EntityDialog<EmpresasContactosRow, any> {
        protected getFormKey() { return EmpresasContactosForm.formKey; }
        protected getIdProperty() { return EmpresasContactosRow.idProperty; }
        protected getLocalTextPrefix() { return EmpresasContactosRow.localTextPrefix; }
        protected getService() { return EmpresasContactosService.baseUrl; }
        protected getDeletePermission() { return EmpresasContactosRow.deletePermission; }
        protected getInsertPermission() { return EmpresasContactosRow.insertPermission; }
        protected getUpdatePermission() { return EmpresasContactosRow.updatePermission; }

        protected form = new EmpresasContactosForm(this.idPrefix);

    }
}