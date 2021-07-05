
namespace ProyectosZec.Nuevo_Roezec {

    @Serenity.Decorators.registerClass()
    export class TipologiasCapitalDialog extends Serenity.EntityDialog<TipologiasCapitalRow, any> {
        protected getFormKey() { return TipologiasCapitalForm.formKey; }
        protected getIdProperty() { return TipologiasCapitalRow.idProperty; }
        protected getLocalTextPrefix() { return TipologiasCapitalRow.localTextPrefix; }
        protected getNameProperty() { return TipologiasCapitalRow.nameProperty; }
        protected getService() { return TipologiasCapitalService.baseUrl; }
        protected getDeletePermission() { return TipologiasCapitalRow.deletePermission; }
        protected getInsertPermission() { return TipologiasCapitalRow.insertPermission; }
        protected getUpdatePermission() { return TipologiasCapitalRow.updatePermission; }

        protected form = new TipologiasCapitalForm(this.idPrefix);

    }
}