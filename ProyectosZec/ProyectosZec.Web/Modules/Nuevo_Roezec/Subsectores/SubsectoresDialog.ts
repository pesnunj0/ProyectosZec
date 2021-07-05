
namespace ProyectosZec.Nuevo_Roezec {

    @Serenity.Decorators.registerClass()
    export class SubsectoresDialog extends Serenity.EntityDialog<SubsectoresRow, any> {
        protected getFormKey() { return SubsectoresForm.formKey; }
        protected getIdProperty() { return SubsectoresRow.idProperty; }
        protected getLocalTextPrefix() { return SubsectoresRow.localTextPrefix; }
        protected getNameProperty() { return SubsectoresRow.nameProperty; }
        protected getService() { return SubsectoresService.baseUrl; }
        protected getDeletePermission() { return SubsectoresRow.deletePermission; }
        protected getInsertPermission() { return SubsectoresRow.insertPermission; }
        protected getUpdatePermission() { return SubsectoresRow.updatePermission; }

        protected form = new SubsectoresForm(this.idPrefix);

    }
}