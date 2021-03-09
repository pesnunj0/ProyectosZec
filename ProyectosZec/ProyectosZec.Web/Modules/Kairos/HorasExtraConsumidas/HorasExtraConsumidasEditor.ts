/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace ProyectosZec.Kairos {
    @Serenity.Decorators.registerEditor()
    export class HorasExtraConsumidasEditor extends Common.GridEditorBase<HorasExtraConsumidasRow> {
        protected getColumnsKey() { return "Kairos.HorasExtraConsumidas"; }
        protected getDialogType() { return HorasExtraConsumidasDialog; }
        protected getLocalTextPrefix() { return HorasExtraConsumidasRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}