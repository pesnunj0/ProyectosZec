
namespace ProyectosZec.Roezec {

    @Serenity.Decorators.registerClass()
    export class RoezecEstadosDialog extends Serenity.EntityDialog<RoezecEstadosRow, any> {
        protected getFormKey() { return RoezecEstadosForm.formKey; }
        protected getIdProperty() { return RoezecEstadosRow.idProperty; }
        protected getLocalTextPrefix() { return RoezecEstadosRow.localTextPrefix; }
        protected getNameProperty() { return RoezecEstadosRow.nameProperty; }
        protected getService() { return RoezecEstadosService.baseUrl; }
        protected getDeletePermission() { return RoezecEstadosRow.deletePermission; }
        protected getInsertPermission() { return RoezecEstadosRow.insertPermission; }
        protected getUpdatePermission() { return RoezecEstadosRow.updatePermission; }

        protected form = new RoezecEstadosForm(this.idPrefix);

    }
}