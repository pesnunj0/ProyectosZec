
namespace ProyectosZec.Nuevo_Roezec {

    @Serenity.Decorators.registerClass()
    export class EstadosEmpresaDialog extends Serenity.EntityDialog<EstadosEmpresaRow, any> {
        protected getFormKey() { return EstadosEmpresaForm.formKey; }
        protected getIdProperty() { return EstadosEmpresaRow.idProperty; }
        protected getLocalTextPrefix() { return EstadosEmpresaRow.localTextPrefix; }
        protected getNameProperty() { return EstadosEmpresaRow.nameProperty; }
        protected getService() { return EstadosEmpresaService.baseUrl; }
        protected getDeletePermission() { return EstadosEmpresaRow.deletePermission; }
        protected getInsertPermission() { return EstadosEmpresaRow.insertPermission; }
        protected getUpdatePermission() { return EstadosEmpresaRow.updatePermission; }

        protected form = new EstadosEmpresaForm(this.idPrefix);

    }
}