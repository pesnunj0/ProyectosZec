
namespace ProyectosZec.Nuevo_Roezec {

    @Serenity.Decorators.registerClass()
    export class EmpresasNaceDialog extends Serenity.EntityDialog<EmpresasNaceRow, any> {
        protected getFormKey() { return EmpresasNaceForm.formKey; }
        protected getIdProperty() { return EmpresasNaceRow.idProperty; }
        protected getLocalTextPrefix() { return EmpresasNaceRow.localTextPrefix; }
        protected getService() { return EmpresasNaceService.baseUrl; }
        protected getDeletePermission() { return EmpresasNaceRow.deletePermission; }
        protected getInsertPermission() { return EmpresasNaceRow.insertPermission; }
        protected getUpdatePermission() { return EmpresasNaceRow.updatePermission; }

        protected form = new EmpresasNaceForm(this.idPrefix);

    }
}