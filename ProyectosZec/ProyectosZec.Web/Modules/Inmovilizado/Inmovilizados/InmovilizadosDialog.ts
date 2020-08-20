
namespace ProyectosZec.Inmovilizado {

    @Serenity.Decorators.registerClass()
    export class InmovilizadosDialog extends Serenity.EntityDialog<InmovilizadosRow, any> {
        protected getFormKey() { return InmovilizadosForm.formKey; }
        protected getIdProperty() { return InmovilizadosRow.idProperty; }
        protected getLocalTextPrefix() { return InmovilizadosRow.localTextPrefix; }
        protected getNameProperty() { return InmovilizadosRow.nameProperty; }
        protected getService() { return InmovilizadosService.baseUrl; }
        protected getDeletePermission() { return InmovilizadosRow.deletePermission; }
        protected getInsertPermission() { return InmovilizadosRow.insertPermission; }
        protected getUpdatePermission() { return InmovilizadosRow.updatePermission; }

        protected form = new InmovilizadosForm(this.idPrefix);

    }
}