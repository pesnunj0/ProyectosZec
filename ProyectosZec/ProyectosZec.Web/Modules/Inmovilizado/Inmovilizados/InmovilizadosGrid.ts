
namespace ProyectosZec.Inmovilizado {
    @Serenity.Decorators.registerClass()
    // Añadido para los filtros multiples
    @Serenity.Decorators.filterable()
    // Fin Añadido
    @Serenity.Decorators.registerClass()
    export class InmovilizadosGrid extends Serenity.EntityGrid<InmovilizadosRow, any> {
        protected getColumnsKey() { return 'Inmovilizado.Inmovilizados'; }
        protected getDialogType() { return InmovilizadosDialog; }
        protected getIdProperty() { return InmovilizadosRow.idProperty; }
        protected getInsertPermission() { return InmovilizadosRow.insertPermission; }
        protected getLocalTextPrefix() { return InmovilizadosRow.localTextPrefix; }
        protected getService() { return InmovilizadosService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        // Agrupar y sumar 
        protected createSlickGrid() {
            var grid = super.createSlickGrid();

            // need to register this plugin for grouping or you'll have errors
            grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());

            this.view.setSummaryOptions({
                aggregators: [
                    new Slick.Aggregators.Sum(InmovilizadosRow.Fields.Valor),
                    new Slick.Aggregators.Sum(InmovilizadosRow.Fields.ValorResidual)
                ]
            });

            return grid;
        }

        protected getSlickOptions() {
            var opt = super.getSlickOptions();
            opt.showFooterRow = true;
            return opt;
        }

        protected usePager() {
            return false;
        }

        getButtons() {
            var buttons = super.getButtons();

            // Botones Excel y Pdf
            buttons.push(ProyectosZec.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: 'Inmovilizado/Inmovilizados/ListExcel',
                separator: true
            }));

            buttons.push(ProyectosZec.Common.PdfExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit()
            }));

            buttons.push(
                {
                    title: 'SubTipo',
                    cssClass: 'expand-all-button',
                    onClick: () => this.view.setGrouping(
                        [{
                            formatter: x => 'Subtipo: ' + x.value + ' (' + x.count + ' Inmovilizados)',
                            getter: InmovilizadosRow.Fields.SubTipo
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
        /**
 * This method is called for all rows
 * @param item Data item for current row
 * @param index Index of the row in grid
 */
        protected getItemCssClass(item: Inmovilizado.InmovilizadosRow, index: number): string {
            let klass: string = "";

            if (item.FechaBaja != null)
                klass += " discontinued";
            else if (item.ValorResidual <= 0)
                klass += " out-of-stock";
 
            return Q.trimToNull(klass);
        }
    }
}