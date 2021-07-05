
namespace ProyectosZec.Nuevo_Roezec {

    @Serenity.Decorators.registerClass()
    export class ContactosDialog extends Serenity.EntityDialog<ContactosRow, any> {
        protected getFormKey() { return ContactosForm.formKey; }
        protected getIdProperty() { return ContactosRow.idProperty; }
        protected getLocalTextPrefix() { return ContactosRow.localTextPrefix; }
        protected getNameProperty() { return ContactosRow.nameProperty; }
        protected getService() { return ContactosService.baseUrl; }
        protected getDeletePermission() { return ContactosRow.deletePermission; }
        protected getInsertPermission() { return ContactosRow.insertPermission; }
        protected getUpdatePermission() { return ContactosRow.updatePermission; }

        protected form = new ContactosForm(this.idPrefix);

    }
}