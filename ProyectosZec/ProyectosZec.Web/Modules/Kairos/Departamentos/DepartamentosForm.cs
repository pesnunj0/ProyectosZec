
namespace ProyectosZec.Kairos.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Kairos.Departamentos")]
    [BasedOnRow(typeof(Entities.DepartamentosRow), CheckNames = true)]
    public class DepartamentosForm
    {
        public Int64 CodigoCliente { get; set; }
        public String Codigo { get; set; }
        public String Descripcion { get; set; }
        public DateTime FechaBorrado { get; set; }
        public Int32 SedeId { get; set; }
    }
}