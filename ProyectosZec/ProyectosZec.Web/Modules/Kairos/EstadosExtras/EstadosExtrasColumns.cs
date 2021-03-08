
namespace ProyectosZec.Kairos.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Kairos.EstadosExtras")]
    [BasedOnRow(typeof(Entities.EstadosExtrasRow), CheckNames = true)]
    public class EstadosExtrasColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public String EstadoId { get; set; }
        public String Descripcion { get; set; }
    }
}