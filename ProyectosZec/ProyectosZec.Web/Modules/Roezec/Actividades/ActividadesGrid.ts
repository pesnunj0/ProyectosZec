
namespace ProyectosZec.Roezec {

    @Serenity.Decorators.registerClass()
    // Añadido para los filtros multiples
    @Serenity.Decorators.filterable()
    // Fin Añadido

    export class ActividadesGrid extends Serenity.EntityGrid<ActividadesRow, any> {
        protected getColumnsKey() { return 'Roezec.Actividades'; }
        protected getDialogType() { return ActividadesDialog; }
        protected getIdProperty() { return ActividadesRow.idProperty; }
        protected getInsertPermission() { return ActividadesRow.insertPermission; }
        protected getLocalTextPrefix() { return ActividadesRow.localTextPrefix; }
        protected getService() { return ActividadesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        // Agrupar y sumar 
        protected createSlickGrid() {
            var grid = super.createSlickGrid();

            // need to register this plugin for grouping or you'll have errors
            grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());

            // sumamos Objetivo Empleo y de Inversión
            this.view.setSummaryOptions({
                aggregators: [
                    new Slick.Aggregators.Sum(ActividadesRow.Fields.ObjetivoEmpleo),
                    new Slick.Aggregators.Sum(ActividadesRow.Fields.ObjetivoInversion)
                ]
            });

            return grid;
        }
        // Mostramos Footer con los totales
        protected getSlickOptions() {
            var opt = super.getSlickOptions();
            opt.showFooterRow = true;
            return opt;
        }

        protected usePager() {
            return false;
        }


        // Botones Excel y Pdf
        getButtons() {
            var buttons = super.getButtons();

            buttons.push(ProyectosZec.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: 'Roezec/RoezecEmpresas/ListExcel',
                separator: true
            }));

            buttons.push(ProyectosZec.Common.PdfExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit()
            }));

            buttons.push(
                {
                    title: 'Agrupar por Año',
                    cssClass: 'expand-all-button',
                    onClick: () => this.view.setGrouping(
                        [{
                            formatter: x => 'Año: ' + x.value + ' (' + x.count + ' Empresas)',
                            getter: ActividadesRow.Fields.AnyoExpediente
                        }])
                }
            );
            buttons.push(
                {
                    title: 'Agrupar por Año y Técnico',
                    cssClass: 'expand-all-button',
                    onClick: () => this.view.setGrouping(
                        [{
                            formatter: x => 'Año: ' + x.value + ' (' + x.count + ' Empresas)',
                            getter: ActividadesRow.Fields.AnyoExpediente
                        }, {
                            formatter: x => 'Técnico: ' + x.value + ' (' + x.count + ' Empresas)',
                                getter: ActividadesRow.Fields.Tecnico
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