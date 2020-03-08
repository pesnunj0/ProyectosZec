
namespace ProyectosZec.CuadroMandos {

    @Serenity.Decorators.registerClass()
    export class EstadosDialog extends Serenity.EntityDialog<EstadosRow, any> {
        protected getFormKey() { return EstadosForm.formKey; }
        protected getIdProperty() { return EstadosRow.idProperty; }
        protected getLocalTextPrefix() { return EstadosRow.localTextPrefix; }
        protected getNameProperty() { return EstadosRow.nameProperty; }
        protected getService() { return EstadosService.baseUrl; }
        protected getDeletePermission() { return EstadosRow.deletePermission; }
        protected getInsertPermission() { return EstadosRow.insertPermission; }
        protected getUpdatePermission() { return EstadosRow.updatePermission; }

        protected form = new EstadosForm(this.idPrefix);

    }
}