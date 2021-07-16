
namespace ProyectosZec.Nuevo_Roezec {

    @Serenity.Decorators.registerClass()
    export class IdiomasDialog extends Serenity.EntityDialog<IdiomasRow, any> {
        protected getFormKey() { return IdiomasForm.formKey; }
        protected getIdProperty() { return IdiomasRow.idProperty; }
        protected getLocalTextPrefix() { return IdiomasRow.localTextPrefix; }
        protected getNameProperty() { return IdiomasRow.nameProperty; }
        protected getService() { return IdiomasService.baseUrl; }
        protected getDeletePermission() { return IdiomasRow.deletePermission; }
        protected getInsertPermission() { return IdiomasRow.insertPermission; }
        protected getUpdatePermission() { return IdiomasRow.updatePermission; }

        protected form = new IdiomasForm(this.idPrefix);

    }
}