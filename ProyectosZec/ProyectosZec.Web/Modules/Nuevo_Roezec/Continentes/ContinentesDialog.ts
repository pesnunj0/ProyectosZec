
namespace ProyectosZec.Nuevo_Roezec {

    @Serenity.Decorators.registerClass()
    export class ContinentesDialog extends Serenity.EntityDialog<ContinentesRow, any> {
        protected getFormKey() { return ContinentesForm.formKey; }
        protected getIdProperty() { return ContinentesRow.idProperty; }
        protected getLocalTextPrefix() { return ContinentesRow.localTextPrefix; }
        protected getNameProperty() { return ContinentesRow.nameProperty; }
        protected getService() { return ContinentesService.baseUrl; }
        protected getDeletePermission() { return ContinentesRow.deletePermission; }
        protected getInsertPermission() { return ContinentesRow.insertPermission; }
        protected getUpdatePermission() { return ContinentesRow.updatePermission; }

        protected form = new ContinentesForm(this.idPrefix);

    }
}