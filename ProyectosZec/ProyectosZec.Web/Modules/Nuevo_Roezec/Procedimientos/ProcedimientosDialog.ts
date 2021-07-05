
namespace ProyectosZec.Nuevo_Roezec {

    @Serenity.Decorators.registerClass()
    export class ProcedimientosDialog extends Serenity.EntityDialog<ProcedimientosRow, any> {
        protected getFormKey() { return ProcedimientosForm.formKey; }
        protected getIdProperty() { return ProcedimientosRow.idProperty; }
        protected getLocalTextPrefix() { return ProcedimientosRow.localTextPrefix; }
        protected getNameProperty() { return ProcedimientosRow.nameProperty; }
        protected getService() { return ProcedimientosService.baseUrl; }
        protected getDeletePermission() { return ProcedimientosRow.deletePermission; }
        protected getInsertPermission() { return ProcedimientosRow.insertPermission; }
        protected getUpdatePermission() { return ProcedimientosRow.updatePermission; }

        protected form = new ProcedimientosForm(this.idPrefix);

    }
}