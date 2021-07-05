
namespace ProyectosZec.Nuevo_Roezec {

    @Serenity.Decorators.registerClass()
    export class TiposGarantiaTasasDialog extends Serenity.EntityDialog<TiposGarantiaTasasRow, any> {
        protected getFormKey() { return TiposGarantiaTasasForm.formKey; }
        protected getIdProperty() { return TiposGarantiaTasasRow.idProperty; }
        protected getLocalTextPrefix() { return TiposGarantiaTasasRow.localTextPrefix; }
        protected getNameProperty() { return TiposGarantiaTasasRow.nameProperty; }
        protected getService() { return TiposGarantiaTasasService.baseUrl; }
        protected getDeletePermission() { return TiposGarantiaTasasRow.deletePermission; }
        protected getInsertPermission() { return TiposGarantiaTasasRow.insertPermission; }
        protected getUpdatePermission() { return TiposGarantiaTasasRow.updatePermission; }

        protected form = new TiposGarantiaTasasForm(this.idPrefix);

    }
}