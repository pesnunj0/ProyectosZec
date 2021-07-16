
namespace ProyectosZec.Nuevo_Roezec {

    @Serenity.Decorators.registerClass()

    // Añadido para los filtros multiples
    @Serenity.Decorators.filterable()
    // Fin Añadido

    export class EmpresasGrid extends Serenity.EntityGrid<EmpresasRow, any> {
        protected getColumnsKey() { return 'Nuevo_Roezec.Empresas'; }
        protected getDialogType() { return EmpresasDialog; }
        protected getIdProperty() { return EmpresasRow.idProperty; }
        protected getInsertPermission() { return EmpresasRow.insertPermission; }
        protected getLocalTextPrefix() { return EmpresasRow.localTextPrefix; }
        protected getService() { return EmpresasService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getQuickFilters() {
            var filters = super.getQuickFilters();

            //filters.push({
            //    type: Serenity.LookupEditor,
            //    options: {
            //        lookupKey: ProcedimientosRow.lookupKey
            //    },
            //    field: 'ProcedimientoId',
            //    title: 'Tiene Procedimiento en Historial',
            //    handler: w => {
            //        (this.view.params as ProyectosZec.Nuevo_Roezec.HistorialListRequest).ProcedimientoId = Q.toId(w.value);
            //    },


            //});

            return filters;

        }

        // Botones Excel y Pdf
        getButtons() {
            var buttons = super.getButtons();

            buttons.push(ProyectosZec.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: 'Nuevo_Roezec/Empresas/ListExcel',
                separator: true
            }));

            buttons.push(ProyectosZec.Common.PdfExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit()
            }));
            buttons.push(
                {
                    title: 'Técnico',
                    cssClass: 'expand-all-button',
                    onClick: () => this.view.setGrouping(
                        [{
                            formatter: x => 'Técnico: ' + x.value + ' (' + x.count + ' Empresas)',
                            getter: EmpresasRow.Fields.Tecnico
                        }])
                }
            );
            buttons.push(
                {
                    title: 'Desagrupar',
                    cssClass: 'collapse-all-button',
                    onClick: () => this.view.setGrouping([])
                }
            );

            return buttons;
            // Fin añadidos
        }


    }
}