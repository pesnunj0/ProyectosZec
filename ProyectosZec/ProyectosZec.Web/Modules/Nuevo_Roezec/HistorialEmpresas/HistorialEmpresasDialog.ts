
namespace ProyectosZec.Nuevo_Roezec {

    @Serenity.Decorators.registerClass()
    export class HistorialEmpresasDialog extends Serenity.EntityDialog<HistorialEmpresasRow, any> {
        protected getFormKey() { return HistorialEmpresasForm.formKey; }
        protected getIdProperty() { return HistorialEmpresasRow.idProperty; }
        protected getLocalTextPrefix() { return HistorialEmpresasRow.localTextPrefix; }
        protected getNameProperty() { return HistorialEmpresasRow.nameProperty; }
        protected getService() { return HistorialEmpresasService.baseUrl; }
        protected getDeletePermission() { return HistorialEmpresasRow.deletePermission; }
        protected getInsertPermission() { return HistorialEmpresasRow.insertPermission; }
        protected getUpdatePermission() { return HistorialEmpresasRow.updatePermission; }

        protected form = new HistorialEmpresasForm(this.idPrefix);

    }
}