
namespace ProyectosZec.Inmovilizado {

    @Serenity.Decorators.registerClass()
    export class TiposinmovilizadoDialog extends Serenity.EntityDialog<TiposinmovilizadoRow, any> {
        protected getFormKey() { return TiposinmovilizadoForm.formKey; }
        protected getIdProperty() { return TiposinmovilizadoRow.idProperty; }
        protected getLocalTextPrefix() { return TiposinmovilizadoRow.localTextPrefix; }
        protected getNameProperty() { return TiposinmovilizadoRow.nameProperty; }
        protected getService() { return TiposinmovilizadoService.baseUrl; }
        protected getDeletePermission() { return TiposinmovilizadoRow.deletePermission; }
        protected getInsertPermission() { return TiposinmovilizadoRow.insertPermission; }
        protected getUpdatePermission() { return TiposinmovilizadoRow.updatePermission; }

        protected form = new TiposinmovilizadoForm(this.idPrefix);

    }
}