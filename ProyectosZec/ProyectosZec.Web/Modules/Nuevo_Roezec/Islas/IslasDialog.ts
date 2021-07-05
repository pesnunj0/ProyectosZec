
namespace ProyectosZec.Nuevo_Roezec {

    @Serenity.Decorators.registerClass()
    export class IslasDialog extends Serenity.EntityDialog<IslasRow, any> {
        protected getFormKey() { return IslasForm.formKey; }
        protected getIdProperty() { return IslasRow.idProperty; }
        protected getLocalTextPrefix() { return IslasRow.localTextPrefix; }
        protected getNameProperty() { return IslasRow.nameProperty; }
        protected getService() { return IslasService.baseUrl; }
        protected getDeletePermission() { return IslasRow.deletePermission; }
        protected getInsertPermission() { return IslasRow.insertPermission; }
        protected getUpdatePermission() { return IslasRow.updatePermission; }

        protected form = new IslasForm(this.idPrefix);

    }
}