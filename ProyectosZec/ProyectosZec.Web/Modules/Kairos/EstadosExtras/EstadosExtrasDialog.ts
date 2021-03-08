
namespace ProyectosZec.Kairos {

    @Serenity.Decorators.registerClass()
    export class EstadosExtrasDialog extends Serenity.EntityDialog<EstadosExtrasRow, any> {
        protected getFormKey() { return EstadosExtrasForm.formKey; }
        protected getIdProperty() { return EstadosExtrasRow.idProperty; }
        protected getLocalTextPrefix() { return EstadosExtrasRow.localTextPrefix; }
        protected getNameProperty() { return EstadosExtrasRow.nameProperty; }
        protected getService() { return EstadosExtrasService.baseUrl; }
        protected getDeletePermission() { return EstadosExtrasRow.deletePermission; }
        protected getInsertPermission() { return EstadosExtrasRow.insertPermission; }
        protected getUpdatePermission() { return EstadosExtrasRow.updatePermission; }

        protected form = new EstadosExtrasForm(this.idPrefix);

    }
}