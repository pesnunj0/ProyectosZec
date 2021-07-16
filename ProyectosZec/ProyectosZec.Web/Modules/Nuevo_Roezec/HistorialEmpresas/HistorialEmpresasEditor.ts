/// <reference path="../../Common/Helpers/GridEditorBase.ts" />


namespace ProyectosZec.Nuevo_Roezec {

    @Serenity.Decorators.registerClass()
    export class HistorialEmpresasEditor extends Common.GridEditorBase<HistorialEmpresasRow> {
        protected getColumnsKey() { return "Nuevo_Roezec.HistorialEmpresas"; }
        protected getDialogType() { return HistorialEmpresasEditDialog; }
        protected getLocalTextPrefix() { return HistorialEmpresasRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getAddButtonCaption() {
            return "Añadir Procedimiento";
        }
    }
}