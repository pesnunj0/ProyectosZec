
namespace ProyectosZec.CuadroMandos {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class SectoresDialog extends Serenity.EntityDialog<SectoresRow, any> {
        protected getFormKey() { return SectoresForm.formKey; }
        protected getIdProperty() { return SectoresRow.idProperty; }
        protected getLocalTextPrefix() { return SectoresRow.localTextPrefix; }
        protected getNameProperty() { return SectoresRow.nameProperty; }
        protected getService() { return SectoresService.baseUrl; }
        protected getDeletePermission() { return SectoresRow.deletePermission; }
        protected getInsertPermission() { return SectoresRow.insertPermission; }
        protected getUpdatePermission() { return SectoresRow.updatePermission; }

        protected form = new SectoresForm(this.idPrefix);

    }
}