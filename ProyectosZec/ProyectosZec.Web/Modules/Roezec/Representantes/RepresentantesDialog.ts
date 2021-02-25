
namespace ProyectosZec.Roezec {

    @Serenity.Decorators.registerClass()
    export class RepresentantesDialog extends Serenity.EntityDialog<RepresentantesRow, any> {
        protected getFormKey() { return RepresentantesForm.formKey; }
        protected getIdProperty() { return RepresentantesRow.idProperty; }
        protected getLocalTextPrefix() { return RepresentantesRow.localTextPrefix; }
        protected getNameProperty() { return RepresentantesRow.nameProperty; }
        protected getService() { return RepresentantesService.baseUrl; }
        protected getDeletePermission() { return RepresentantesRow.deletePermission; }
        protected getInsertPermission() { return RepresentantesRow.insertPermission; }
        protected getUpdatePermission() { return RepresentantesRow.updatePermission; }

        protected form = new RepresentantesForm(this.idPrefix);

    }
}