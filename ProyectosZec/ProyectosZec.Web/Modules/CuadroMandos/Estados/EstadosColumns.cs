
namespace ProyectosZec.CuadroMandos.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("CuadroMandos.Estados")]
    [BasedOnRow(typeof(Entities.EstadosRow), CheckNames = true)]
    public class EstadosColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 EstadoId { get; set; }
        [EditLink]
        public String Estado { get; set; }
    }
}