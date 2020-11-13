
namespace ProyectosZec.Roezec {

    @Serenity.Decorators.registerClass()
    export class RoezecEmpresasDialog extends Serenity.EntityDialog<RoezecEmpresasRow, any> {
        protected getFormKey() { return RoezecEmpresasForm.formKey; }
        protected getIdProperty() { return RoezecEmpresasRow.idProperty; }
        protected getLocalTextPrefix() { return RoezecEmpresasRow.localTextPrefix; }
        protected getNameProperty() { return RoezecEmpresasRow.nameProperty; }
        protected getService() { return RoezecEmpresasService.baseUrl; }
        protected getDeletePermission() { return RoezecEmpresasRow.deletePermission; }
        protected getInsertPermission() { return RoezecEmpresasRow.insertPermission; }
        protected getUpdatePermission() { return RoezecEmpresasRow.updatePermission; }

        protected form = new RoezecEmpresasForm(this.idPrefix);

    }
}