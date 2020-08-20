
namespace ProyectosZec.Inmovilizado {

    @Serenity.Decorators.registerClass()
    export class SubtiposinmovilizadoDialog extends Serenity.EntityDialog<SubtiposinmovilizadoRow, any> {
        protected getFormKey() { return SubtiposinmovilizadoForm.formKey; }
        protected getIdProperty() { return SubtiposinmovilizadoRow.idProperty; }
        protected getLocalTextPrefix() { return SubtiposinmovilizadoRow.localTextPrefix; }
        protected getNameProperty() { return SubtiposinmovilizadoRow.nameProperty; }
        protected getService() { return SubtiposinmovilizadoService.baseUrl; }
        protected getDeletePermission() { return SubtiposinmovilizadoRow.deletePermission; }
        protected getInsertPermission() { return SubtiposinmovilizadoRow.insertPermission; }
        protected getUpdatePermission() { return SubtiposinmovilizadoRow.updatePermission; }

        protected form = new SubtiposinmovilizadoForm(this.idPrefix);

    }
}