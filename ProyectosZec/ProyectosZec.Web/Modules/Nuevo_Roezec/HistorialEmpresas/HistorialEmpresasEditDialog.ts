/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace ProyectosZec.Nuevo_Roezec {

    @Serenity.Decorators.registerClass()
    export class HistorialEmpresasEditDialog extends Common.GridEditorDialog<HistorialEmpresasRow> {
        protected getFormKey() { return HistorialEmpresasForm.formKey; }
        protected getNameProperty() { return HistorialEmpresasRow.nameProperty; }
        protected getLocalTextPrefix() { return HistorialEmpresasRow.localTextPrefix; }

        protected form: HistorialEmpresasForm;

        constructor() {
            super();
            this.form = new HistorialEmpresasForm(this.idPrefix);
        }
    }
}