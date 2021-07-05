
namespace ProyectosZec.Nuevo_Roezec {

    @Serenity.Decorators.registerClass()
    export class TiposContactoDialog extends Serenity.EntityDialog<TiposContactoRow, any> {
        protected getFormKey() { return TiposContactoForm.formKey; }
        protected getIdProperty() { return TiposContactoRow.idProperty; }
        protected getLocalTextPrefix() { return TiposContactoRow.localTextPrefix; }
        protected getNameProperty() { return TiposContactoRow.nameProperty; }
        protected getService() { return TiposContactoService.baseUrl; }
        protected getDeletePermission() { return TiposContactoRow.deletePermission; }
        protected getInsertPermission() { return TiposContactoRow.insertPermission; }
        protected getUpdatePermission() { return TiposContactoRow.updatePermission; }

        protected form = new TiposContactoForm(this.idPrefix);

    }
}