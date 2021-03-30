/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace ProyectosZec.Kairos {
    @Serenity.Decorators.registerClass()
    export class HorasExtraConsumidasEditDialog extends
        Common.GridEditorDialog<HorasExtraConsumidasRow> {

        protected getFormKey() { return HorasExtraConsumidasForm.formKey; }
        protected getNameProperty() { return HorasExtraConsumidasRow.nameProperty; }
        protected getLocalTextPrefix() { return HorasExtraConsumidasRow.localTextPrefix; }

        protected form: HorasExtraConsumidasForm;

        constructor() {
            super();
            this.form = new HorasExtraConsumidasForm(this.idPrefix);
        }
    }
}