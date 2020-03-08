
namespace ProyectosZec.CuadroMandos.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("CuadroMandos.Tecnicos")]
    [BasedOnRow(typeof(Entities.TecnicosRow), CheckNames = true)]
    public class TecnicosColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 TecnicoId { get; set; }
        [EditLink]
        public String NombreTecnico { get; set; }
        public String Tecnico { get; set; }
    }
}