
namespace ProyectosZec.Nuevo_Roezec {

    @Serenity.Decorators.registerClass()
    export class FormasJuridicasDialog extends Serenity.EntityDialog<FormasJuridicasRow, any> {
        protected getFormKey() { return FormasJuridicasForm.formKey; }
        protected getIdProperty() { return FormasJuridicasRow.idProperty; }
        protected getLocalTextPrefix() { return FormasJuridicasRow.localTextPrefix; }
        protected getNameProperty() { return FormasJuridicasRow.nameProperty; }
        protected getService() { return FormasJuridicasService.baseUrl; }
        protected getDeletePermission() { return FormasJuridicasRow.deletePermission; }
        protected getInsertPermission() { return FormasJuridicasRow.insertPermission; }
        protected getUpdatePermission() { return FormasJuridicasRow.updatePermission; }

        protected form = new FormasJuridicasForm(this.idPrefix);

    }
}